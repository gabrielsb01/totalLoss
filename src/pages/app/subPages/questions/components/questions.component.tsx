//React 
import * as React from 'react'
import { Field, reduxForm } from 'redux-form'

//Material
import { 
    Typography, 
    Grid, 
    IconButton, 
    Fab, 
    Chip,
    FormControl, 
    FormControlLabel, 
    Radio, 
    RadioGroup, 
    FormLabel, 
    Button, 
    ButtonBase, 
    Divider ,
} from '@material-ui/core'
import { Done, QuestionAnswerSharp, Warning } from '@material-ui/icons'
import Scrollbars from 'react-custom-scrollbars'
//css
import classNames from "classnames/bind"
import Header from '@components/header'
import { QuestionsIProps, QuestionsIStates } from '../interfaces/questions.interface'
const styl: any = require('./../css/questions.component.styl')
const cx = classNames.bind(styl)

const renderRadioGroup: any = ({ input, label, children, className, classNameChildren, ...rest }) => (
    <FormControl className={cx(className)}>
        <FormLabel style={{fontSize: '14px' }}>{label}</FormLabel>
        <RadioGroup 
            {...input}
            {...rest}
            className={classNameChildren}
        >
            {children}
        </RadioGroup>
    </FormControl>
  )

const chipButton: any = ({ input, label, ...rest }) => (
    <Chip 
        label={label}
        {...input}
        {...rest}
        color={input.value == 'true' ? 'primary':'default'}
        onClick={() => input.onChange(input.value == 'true' ? 'false' : 'true')}
    />
)

class Questions extends React.Component <QuestionsIProps, QuestionsIStates> {
    constructor(props: QuestionsIProps) {
        super(props)
        this.state = {
          points: 0,
          categoryPoints: 0,
        }
      }

    selectCategory =  (id: number) => {
        this.props.selectCategory(id)
    }

    componentDidMount() {
        const { idConfiguration } = this.props
        this.props.getCategories(idConfiguration)
    }

    handleSubmitForm = (values) => {
        const { token } = this.props
        const answeredQuestions = []
        for (const [k, v] of Object.entries(values)) {
            answeredQuestions.push({Id: k.toString().split("-")[1], Answer: v})
        }
        this.props.sendAnswers(answeredQuestions)
        this.props.history.push(`/app/fotos/?token=${token}`)
    }

    componentWillUnmount(){
        this.props.clearQuestions()
    }
    
    render () {
        const { quiz, question, handleSubmit, HasAnswer, color } = this.props
        const style = {
            backgroundColor:  `#${color}`
          }
        return (
            <React.Fragment>
                <Header title="Avaliação de Danos" {...this.props} /> 
                <div className={cx('content')}>
                    <Grid container spacing={2}>
                        {
                            !question && 
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <Typography>Selecione o <b>Tipo do Acidente</b></Typography>
                                        
                                    </Grid>
                                    {
                                        HasAnswer && 
                                        <Grid item xs={12}>
                                            <Typography className={cx('alert')}><Warning />Ao mudar o tipo de avaria, os dados salvos serão apagados</Typography>
                                        </Grid>
                                    }
                                    {
                                        quiz && quiz.map((item, i )=>
                                            <Grid key={i} item xs={6}>
                                                <ButtonBase 
                                                    key={i} 
                                                    className={cx('imageButton')} 
                                                    style={{ backgroundImage: `url(data:image/jpg;base64,${item.FileBase64})`, height: 250 }}
                                                    onClick={() => this.selectCategory(item.Id)}
                                                >
                                                    {/* <img src={`data:image/jpg;base64,${item.FileBase64}`} /> */}
                                                    <Typography variant="h6">{item.Name}</Typography> 
                                                </ButtonBase>
                                            </Grid>
                                        )
                                    }
                            </React.Fragment>
                        }
                        
                        
                    </Grid>
                    { 
                        question &&
                            <React.Fragment>
                                <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography>Responda com <b>Sim</b> ou <b>Não</b>.</Typography>
                                        </Grid>
                                        {
                                            question.map((questionItem, i) => {
                                                if(questionItem.Type == 1){
                                                    return (
                                                        <Grid key={i} item xs={4}>
                                                            <Field
                                                                name={`question-${questionItem.Id}`}
                                                                component={chipButton}
                                                                label={questionItem.Label}
                                                            />
                                                        </Grid>
                                                    )
                                                }
                                            })
                                        }
                                    </Grid>
                                    {
                                        question.map((questionItem, i) => {
                                            if(questionItem.Type == 0){
                                                return (
                                                    <Grid key={i} item xs={12}>
                                                        <Field
                                                            component={renderRadioGroup}
                                                            name={`question-${questionItem.Id}`}
                                                            label={questionItem.Label}
                                                            className={cx('question')}
                                                            classNameChildren={cx('answer')}
                                                            key={i}
                                                        >
                                                            <FormControlLabel
                                                                control={
                                                                    <Radio value={`${true}`} color="primary" />
                                                                }
                                                                label="Sim"
                                                            />
                                                            <FormControlLabel
                                                                
                                                                control={
                                                                    <Radio value={`${false}`} color="primary" />
                                                                }
                                                                label="Não"
                                                            />
                                                        </Field>
                                                    </Grid>
                                                )
                                            }
                                        })
                                    }
                                    <Button 
                                        className={cx('confirmButton')} 
                                        color="primary" 
                                        style={style}
                                        variant="contained" 
                                        fullWidth
                                        type="submit"
                                    >
                                            AVANÇAR
                                    </Button>
                                </form>
                            </React.Fragment>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default reduxForm({
    form: "Question",
    destroyOnUnmount: false,
    enableReinitialize: true,
})(Questions as any)