const createTextMask: any =  require('redux-form-input-masks').createTextMask
const createNumberMask: any =  require('redux-form-input-masks').createNumberMask
const formatCpf: any = require('@brazilian-utils/formatters').formatCpf
const formatCnpj: any = require('@brazilian-utils/formatters').formatCnpj

export const mobilePhoneMask = createTextMask({
  pattern: '+99 (99) 99999-9999',
})
export const PhoneMask = createTextMask({
  pattern: '+99 (99) 99999-9999',
})
export const postalMask = createTextMask({
  pattern: '99999-999',
})

export const currencyMask = createNumberMask({
  prefix: 'R$ ',
  decimalPlaces: 2,
  locale: 'pt-BR'
})

export const kmMask = createNumberMask({
  suffix: ' km',
  locale: 'pt-BR'
})
export const percentMask = createNumberMask({
  suffix: ' %',
  locale: 'pt-BR'
})

//export const validationCurrency = value => value >= 1000000 ? 'Maximum value is 999.999,00' : ''
//export const validationPercent = value => value >= 101 ? 'Maximum value is 100' : ''

export const nomalizeCpfCnpj = (value: any) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 11) {
    return formatCpf(onlyNums)
  } else {
    return formatCnpj(onlyNums)
  }

}

export const timeMask = createNumberMask({
  decimalPlaces: 1,
})

export const normalizeChassi = (value: any) => {
  if (!value) {
    return value
  }
  if(value.length >= 17) {
    return value.slice(0,17)
  }
  else {
    return value
  }
}

export const observacaoLimit = (value: any) => {
  if (!value) {
    return value
  }
  if(value.length >= 200) {
    return value.slice(0,200)
  }
  else {
    return value
  }
}

export const normalizeDate = (value: any) => {
  if (!value) {
    return value
  }
  if(value.length >= 10) {
    return value.slice(0,10)
  }
  else {
    return value
  }
}

export const normalizeSubtitle = (value: any) => {
  if (!value) {
    return value
  }
  if(value.length >= 50) {
    return value.slice(0,50)
  }
  else {
    return value
  }
}

export const normalizePlaca = (value: any) => {
  if (!value) {
    return value
  }
  const onlyNums = value.toUpperCase().replace(/[^A-Za-z0-9-]+/g, '')
  if (onlyNums.length <= 8) {
    return onlyNums
  }
}

export const normalizeName = (value: any) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+/g, '')
  if (onlyNums.length <= 200) {
    return onlyNums
  }
}

export const normalizeCor = (value: any) => {
  
  if (!value) {
  return value
  }
  let onlyLetters = value.replace(/[\d]+/g, '')
  onlyLetters = onlyLetters.replace(/[!@#$%^&*(),.?":{}|<>¨_+\\;//=\-\[\]]+/g, '')
  return onlyLetters
  
 }
 
 export const validationCurrency = (value) => {
  
  if (!value) {
    return value
  } 
      return value >= 1000000 ? 'Maximum value is 999.999,00' :''
  }

 export const normalizeNoteSize = (value: any) => {

  if (!value) {
    return value
  }

  if(value.length >= 2000) {
    return value.slice(0, 2000)
  }
  else {
    return value
  }
}
//Only Number
export const nomalizeAno = (value: any) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 4) {
    return onlyNums
  }
} 

export const normalizeNotesLowerSize = (value: any) => {

  if (!value) {
    return value
  }

  if(value.length >= 300) {
    return value.slice(0, 300)
  }
  else {
    return value
  }

}

export const normalizeManualInclude = (value: any) => {

  if (!value) {
    return value
  }
  let onlyLetters = value.replace(/\s/g, '')
  if(onlyLetters.length >= 30) {
    return onlyLetters.slice(0, 30)
  }
  else {
    return onlyLetters
  }

}
