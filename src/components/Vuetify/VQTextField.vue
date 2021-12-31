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
      :clearable="!!isClearable"
      :label="label"
    >
      <template #progress>
        <v-progress-linear absolute height="7"></v-progress-linear>
      </template>
    </v-text-field>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useField } from 'vee-validate'
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
    },
    clearable: {
      type: Boolean,
      default: () => true
    }
  },
  setup(props) {
    const { errorMessage, value } = useField(props.name, null, {
      validateOnValueUpdate: false
    })
    console.log('value')
    console.log(value.value)

    const isClearable = computed(() => {
      return value.value && props.clearable
    })

    return {
      errorMessage,
      value,
      isClearable
    }
  }
})
</script>
