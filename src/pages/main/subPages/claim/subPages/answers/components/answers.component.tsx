import * as React from 'react'
import { Field, reduxForm, change, reset } from 'redux-form'
import { ChipButton } from '@components/chipButton/chipButton.component'
import { FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, Typography, Grid, ButtonBase, Button, Divider, Snackbar, IconButton, Paper, Card, CardContent, CardHeader } from '@material-ui/core'

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

import categoriesByIdService from '@core/services/categories/categoriesById.service'
import sendAnswerService from '@core/services/categories/sendAnswer.service'


//CSS
import classNames from 'classnames/bind'
import { Close, Done, Edit } from '@material-ui/icons'
const styl: any = require('./../css/answers.component.styl')
const cx = classNames.bind(styl)

class Answers extends React.Component<any, any> {
    state = {
        quiz: null,
        selectedCategory: null,
        sendAnswerStatus: null,
        disabledEdit: true
    }
    componentDidMount(){
        this.setAnswers()
        this.getCategories()
    }

    getCategories = () => {
        const { idConfiguration } = this.props
        this.props.getCategories(idConfiguration)
    }

    setAnswers = () => {
        const { Answers } = this.props
        Answers.map(item => item.Questions.map(itemQ => this.props.dispatch(change('Answers', `question-${itemQ.Id}`, `${itemQ.Answer}`))))
    }

    verifySelected = (id) => {
        const { Answers } = this.props
        if(Answers.find(item => item.Id == id)){
            return true
        }
    } 

    selectCategory = async (item) => { 
        const questions = await categoriesByIdService(item)
        this.setState({ quiz : questions.data, selectedCategory: item })
        this.props.dispatch(reset('Answers'))
        questions.data.map(itemQ => this.props.dispatch(change('Answers', `question-${itemQ.Id}`, `false`)))
    }

    handleSubmitForm = (values) => {
        const { token } = this.props
        const answeredQuestions = []
        for (const [k, v] of Object.entries(values)) {
            answeredQuestions.push({Id: k.toString().split("-")[1], Answer: v})
        }
        this.props.sendAnswers(answeredQuestions, token)
        this.setState({ sendAnswerStatus: 'Dados atualizado com sucesso.', disabledEdit: true })
    }
    
    render () {
        const { Answers, questions, handleSubmit } = this.props
        const { quiz, selectedCategory, sendAnswerStatus, disabledEdit } = this.state
        return (
            <React.Fragment>
                <Card className={cx('content')}>
                    <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                        <CardHeader
                            action={
                                !disabledEdit ? 
                                <IconButton type={'submit'} className={cx('confirmButton')} color="primary">
                                    <Done />
                                </IconButton>
                                :
                                <IconButton onClick={() => this.setState({ disabledEdit: false })}>
                                    <Edit />
                                </IconButton>
                            } 
                        />
                        <CardContent>
                        <Grid container spacing={2}>
                            {
                                questions && questions.map((item, i )=>
                                    <Grid key={i} item xs={3}>
                                        <ButtonBase 
                                            key={i} 
                                            className={cx('imageButton', (this.verifySelected(item.Id) && !selectedCategory) && 'imageButtonActive', selectedCategory == item.Id && 'imageButtonActive')} 
                                            style={{ backgroundImage: `url(data:image/jpg;base64,${item.FileBase64})`, height: 165 }}
                                            onClick={() => this.selectCategory(item.Id)}
                                            disabled={(disabledEdit || this.verifySelected(item.Id) && !selectedCategory)}
                                        >
                                            {/* <img src={`data:image/jpg;base64,${item.FileBase64}`} /> */}
                                            <Typography variant="h6">{item.Name}</Typography> 
                                        </ButtonBase>
                                    </Grid>
                                )
                            }
                        </Grid>
                        {
                            quiz ?
                                quiz.map((item, k) => 
                                    <Field
                                        component={renderRadioGroup}
                                        name={`question-${item.Id}`}
                                        label={item.Label}
                                        className={cx('question')}
                                        classNameChildren={cx('answer')}
                                        key={k}
                                        disabled={disabledEdit}
                                    >
                                        <FormControlLabel
                                            control={
                                                <Radio value={`${true}`} color="primary" disabled={disabledEdit}/>
                                            }
                                            label="Sim"
                                        />
                                        <FormControlLabel
                                            
                                            control={
                                                <Radio value={`${false}`} color="primary" disabled={disabledEdit}/>
                                            }
                                            label="Não"
                                        />
                                    </Field>   
                                )
                                :
                                Answers.map(itemQ =>
                                    <React.Fragment>
                                        {
                                            itemQ.Questions.map((item, k) =>
                                                <Field
                                                    component={renderRadioGroup}
                                                    name={`question-${item.Id}`}
                                                    label={item.Label}
                                                    className={cx('question')}
                                                    classNameChildren={cx('answer')}
                                                    key={k}
                                                    disabled={disabledEdit}
                                                >
                                                    <FormControlLabel
                                                        control={
                                                            <Radio value={`${true}`} color="primary"  disabled={disabledEdit}/>
                                                        }
                                                        label="Sim"
                                                    />
                                                    <FormControlLabel
                                                        
                                                        control={
                                                            <Radio value={`${false}`} color="primary"  disabled={disabledEdit}/>
                                                        }
                                                        label="Não"
                                                    />
                                                </Field>   
                                            )
                                        }
                                    </React.Fragment>
                                )
                        }
                        </CardContent>
                    </form>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={sendAnswerStatus}
                        autoHideDuration={6000}
                        message={sendAnswerStatus}
                        action={
                            <IconButton onClick={()=> this.setState({ sendAnswerStatus: false })}>
                                <Close />
                            </IconButton>
                        }
                    />
                </Card>
            </React.Fragment>
        )
    }
}

export default reduxForm({
    form: "Answers",
    destroyOnUnmount: true,
    enableReinitialize: true
})(Answers as any)