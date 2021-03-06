import SettingForm from '../setting-form'

export default {
  components: {
    SettingForm
  },
  props: {
    setting: {
      type: Object,
      default: () => ({})
    },
    store: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    selectedSchema () {
      return this.store.getSelectedSchema()
    }
  },
  methods: {
    event (type, value) {
      this.$emit(type, value)
    }
  }
}
