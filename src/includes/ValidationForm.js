import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate'
import { required, email, max as max_lenght, min as min_lenght } from '@vee-validate/rules'
export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('max_lenght', max_lenght)
    defineRule('min_lenght', min_lenght)
    defineRule('email', email)
    defineRule('required', required)
  }
}
