<template>
		<app-card v-if="true" class="ticker-slider grid-b-space" style="height:100%;">
		  <div class="marquee">
       <ul class="marquee-content">
          <li><i class="fab fa-github"></i></li>
          <li><i class="fab fa-codepen"></i></li>
          <li><i class="fab fa-free-code-camp"></i></li>
          <li><i class="fab fa-dev"></i></li>
          <li><i class="fab fa-react"></i></li>
          <li><i class="fab fa-vuejs"></i></li>
          <li><i class="fab fa-angular"></i></li>
          <li><i class="fab fa-node"></i></li>
          <li><i class="fab fa-wordpress"></i></li>
          <li><i class="fab fa-aws"></i></li>
          <li><i class="fab fa-docker"></i></li>
          <li><i class="fab fa-android"></i></li>
        </ul>
      </div>
		</app-card>
		<div v-else class="d-flex justify-content-center py-5 mb-5">
			<fade-loader :loading="!true" color="DarkOrange" size="32px"></fade-loader>
		</div>
</template>
<script>
	import { mapState, mapGetters, mapActions } from 'vuex';
	export default {
		components: {
			
		},
		data() {
			return {
        
			};
		},
    computed: {
			...mapGetters('tasas', ['getData']),
		},
		methods: {

    },
    mounted() {
     
    },
		created() {

    },
	};
</script>
<style>
:root {
  --marquee-width: 80vw;
  --marquee-height: 20vh;
  /* --marquee-elements: 12; */ /* defined with JavaScript */
  --marquee-elements-displayed: 5;
  --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
  --marquee-animation-duration: calc(var(--marquee-elements) * 3s);
}
.marquee {
  width: var(--marquee-width);
  height: var(--marquee-height);
  background-color: #111;
  color: #eee;
  overflow: hidden;
  position: relative;
}
.marquee:before, .marquee:after {
  position: absolute;
  top: 0;
  width: 10rem;
  height: 100%;
  content: "";
  z-index: 1;
}
.marquee:before {
  left: 0;
  background: linear-gradient(to right, #111 0%, transparent 100%);
}
.marquee:after {
  right: 0;
  background: linear-gradient(to left, #111 0%, transparent 100%);
}
.marquee-content {
  list-style: none;
  height: 100%;
  display: flex;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
}
/* .marquee-content:hover {
  animation-play-state: paused;
} */
@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); }
}
.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
  font-size: calc(var(--marquee-height)*3/4); /* 5rem; */
  white-space: nowrap;
}

.marquee-content li img {
  width: 100%;
  /* height: 100%; */
  border: 2px solid #eee;
}

@media (max-width: 600px) {
  html { font-size: 12px; }
  :root {
    --marquee-width: 100vw;
    --marquee-height: 16vh;
    --marquee-elements-displayed: 3;
  }
  .marquee:before, .marquee:after { width: 5rem; }
}


/* Make it move */

@keyframes marquee {
  0% {
    transform: translate(0, 0)
  }
  100% {
    transform: translate(-100%, 0)
  }
}
</style>