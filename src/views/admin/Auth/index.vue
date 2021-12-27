<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <Form
      v-slot="{}"
      :initial-values="initialValues"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <vq-text-field
        :loading="loading"
        name="email"
        label="Email"
        placeholder="Email"
      />
      <vq-text-field name="password" label="Password" placeholder="Password" />
      <v-btn color="primary" type="submit">Submit</v-btn>
    </Form>
  </v-card>
</template>

<script lang="ts">
import VqTextField from '@/components/Vuetify/VQTextField.vue'
import { defineComponent, reactive } from 'vue'
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'
export default defineComponent({
  components: {
    VqTextField,
    Field,
    Form
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().max(50).label('Email'),
      password: yup.string().required().max(30).label('Password')
    })

    const initialValues = reactive({
      email: 'yatendra@singsys.com',
      password: '123456789'
    })

    const { loginUser } = useAuthUserRepository()

    const onSubmit = async (values, actions) => {
      const response = loginUser('login', values)
        .then((response) => {
          alert('ok')
          console.log(response)
        })
        .catch((response) => {
          alert('no')
          console.log(response)
        })
      //console.log({ response })
      // actions.setErrors({
      //   email: ['qrqjrnqw  rnqnwnrc sc qwrnqrnw'],
      //   password: ['test']
      // })
      // console.log(actions)
      // console.log(values)
      ///  console.log(JSON.stringify(values, null, 2));
      //actions.resetForm();
    }

    return {
      onSubmit,
      schema,
      initialValues
    }
  },
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
})
</script>
