export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="changeCount">{{ count }}</button>`,

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  // Компонент должен иметь модель
  model: {
    prop: 'count',
    event: 'increment',
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    changeCount() {
      this.$emit('increment', this.count + 1);
    },
  },
  // Если значение входного параметра не равно 'number' или оно преобразовалось к 0 при помощи default
  // ставим значение 0
  beforeMount: function() {
    if (typeof this.count !== 'number' || this.count === 0) {
      this.$emit('increment', 0);
    }
  }
};
