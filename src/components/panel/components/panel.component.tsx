//React Ecosystem
import * as React from 'react'

//React Interface
import { IProps, IStates } from './../interfaces/panel.interface'

//css
import classNames from 'classnames/bind'
const styl:any = require('../css/panel.component.styl')
const cx = classNames.bind(styl)

class Panel extends React.Component <IProps, IStates> {
  public render () {
    const { title, actions, children, className } = this.props
    return (
      <div className={cx('panel', className) } id={`id-panel-completo`}>
        <header className={cx('panelHeader')}>
          <div className={cx('panelTitle')} id={`id-panel-title`}>{title}</div>
          <div className={cx('panelAction')}>{actions}</div>
        </header>
        <section className={cx('panelBody')} id={`conteudo-panel`}>
          {children}
        </section>
      </div>
    )
  }
}

export default Panel
