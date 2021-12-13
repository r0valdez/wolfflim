<!--<template>-->
<!--  <transition name="modal-fade">-->
<!--    <div class="modal-backdrop">-->
<!--      <div-->
<!--        class="modal"-->
<!--        role="dialog"-->
<!--        aria-labelledby="modalTitle"-->
<!--        aria-describedby="modalDescription"-->
<!--      >-->
<!--        <header class="modal-header" id="modalTitle">-->
<!--          <slot name="header"> This is the default tile! </slot>-->
<!--          <button-->
<!--            type="button"-->
<!--            class="btn-close"-->
<!--            @click="close"-->
<!--            aria-label="Close modal"-->
<!--          >-->
<!--            x-->
<!--          </button>-->
<!--        </header>-->

<!--        <section class="modal-body" id="modalDescription">-->
<!--          <slot name="body"> This is the default body! </slot>-->
<!--        </section>-->

<!--        <footer class="modal-footer">-->
<!--          <slot name="footer"> This is the default footer! </slot>-->
<!--          <button-->
<!--            type="button"-->
<!--            class="btn-green"-->
<!--            @click="close"-->
<!--            aria-label="Close modal"-->
<!--          >-->
<!--            Close me!-->
<!--          </button>-->
<!--        </footer>-->
<!--      </div>-->
<!--    </div>-->
<!--  </transition>-->
<!--</template>-->

<!--<style>-->
<!--.modal-backdrop {-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  bottom: 0;-->
<!--  left: 0;-->
<!--  right: 0;-->
<!--  background-color: rgba(0, 0, 0, 0.3);-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->

<!--.modal {-->
<!--  background: #ffffff;-->
<!--  box-shadow: 2px 2px 20px 1px;-->
<!--  overflow-x: auto;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->

<!--.modal-header,-->
<!--.modal-footer {-->
<!--  padding: 15px;-->
<!--  display: flex;-->
<!--}-->

<!--.modal-header {-->
<!--  position: relative;-->
<!--  border-bottom: 1px solid #eeeeee;-->
<!--  color: #4aae9b;-->
<!--  justify-content: space-between;-->
<!--}-->

<!--.modal-footer {-->
<!--  border-top: 1px solid #eeeeee;-->
<!--  flex-direction: column;-->
<!--}-->

<!--.modal-body {-->
<!--  position: relative;-->
<!--  padding: 20px 10px;-->
<!--}-->

<!--.btn-close {-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  right: 0;-->
<!--  border: none;-->
<!--  font-size: 20px;-->
<!--  padding: 10px;-->
<!--  cursor: pointer;-->
<!--  font-weight: bold;-->
<!--  color: #4aae9b;-->
<!--  background: transparent;-->
<!--}-->

<!--.btn-green {-->
<!--  color: white;-->
<!--  background: #4aae9b;-->
<!--  border: 1px solid #4aae9b;-->
<!--  border-radius: 2px;-->
<!--}-->

<!--.modal-fade-enter,-->
<!--.modal-fade-leave-to {-->
<!--  opacity: 0;-->
<!--}-->

<!--.modal-fade-enter-active,-->
<!--.modal-fade-leave-active {-->
<!--  transition: opacity 0.5s ease;-->
<!--}-->
<!--</style>-->

<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal">
        <!--        <h6>Saved!</h6>-->
        <!--        <p>Your Details have been saved Successfully</p>-->
        <slot />
      </div>

      <div class="close" @click="$emit('close-modal')">
        <svg
          class="icn-close"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle opacity="0.6" cx="26" cy="26" r="26" fill="#1D1D1D" />
          <path
            d="M38 14L14 38"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M14 14L38 38"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<!--https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/-->
<style scoped lang="scss">
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000df;
  z-index: 9999;
}

.modal {
  text-align: center;
  /*background-color: white;*/
  //height: 500px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.close {
  position: fixed;
  left: 2rem;
  top: 2rem;
  cursor: pointer;
  color: white;
}

.icn-close {
  width: 44px;
  @screen md {
    width: 52px;
  }
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}
</style>
