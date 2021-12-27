<template>
  <v-container fluid>
    <v-text-field
      v-model="value"
      :loading="loading"
      :rounded="true"
      variant="outlined"
      :error-messages="errorMessage"
      :error="errorMessage"
      :messages="errorMessage"
      :type="type"
      color="primary"
      :label="label"
    >
      <template #progress>
        <v-progress-linear absolute height="7"></v-progress-linear>
      </template>
    </v-text-field>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useField } from 'vee-validate'
import { boolean } from 'yup/lib/locale'
export default defineComponent({
  name: 'VQTextField',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => 'text'
    },
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    loading: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props) {
    const { errorMessage, value } = useField(props.name, null, {
      validateOnValueUpdate: true
    })

    return {
      errorMessage,
      value
    }
  }
})
</script>
