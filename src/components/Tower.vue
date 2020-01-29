<template>
	<div class="tower">
		<div class="tower__title">{{ item.title }}</div>
		<div class="tower__filling">{{ `${fillingPercentage}%` }}</div>
		<div
			:class="['tower__status-bar', { 'bg-error': !isProperlyLoaded }]"
		></div>
		<div class="tower__body">
			<svg
				width="156"
				height="497"
				viewBox="0 0 156 497"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M155.3 6.89999H0.699951V11.2H155.3V6.89999Z" fill="#CBCBCB" />
				<path d="M146.7 14H9.3999V105.9H146.7V14Z" fill="url(#paint0_linear)" />
				<path d="M155.3 412.7H0.699951V417H155.3V412.7Z" fill="#CBCBCB" />
				<path
					d="M146.7 115.5H9.3999V207.4H146.7V115.5Z"
					fill="url(#paint1_linear)"
				/>
				<path
					d="M146.7 216.9H9.3999V308.8H146.7V216.9Z"
					fill="url(#paint2_linear)"
				/>
				<path
					d="M146.7 318.4H9.3999V410.3H146.7V318.4Z"
					fill="url(#paint3_linear)"
				/>
				<path
					d="M69.2999 496.4L9.3999 419.8H146.7L86.6999 496.4H69.2999Z"
					fill="url(#paint4_linear)"
				/>
				<path opacity="0.5" :d="fillingSVGPath" fill="#21B249" />
				<path d="M155.3 209.8H0.699951V214.1H155.3V209.8Z" fill="#CBCBCB" />
				<path d="M155.3 311.2H0.699951V315.5H155.3V311.2Z" fill="#CBCBCB" />
				<path d="M155.3 108.3H0.699951V112.6H155.3V108.3Z" fill="#CBCBCB" />
				<path
					d="M54.5 2.60001H101.6"
					stroke="#8B959F"
					stroke-width="4"
					stroke-miterlimit="22.9256"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="12.7257"
						y1="59.9563"
						x2="146.688"
						y2="59.947"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#616166" />
						<stop offset="0.21" stop-color="#9B9B9B" />
						<stop offset="1" stop-color="#48484F" />
					</linearGradient>
					<linearGradient
						id="paint1_linear"
						x1="12.7257"
						y1="161.4"
						x2="146.688"
						y2="161.4"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#616166" />
						<stop offset="0.21" stop-color="#9B9B9B" />
						<stop offset="1" stop-color="#48484F" />
					</linearGradient>
					<linearGradient
						id="paint2_linear"
						x1="12.7257"
						y1="262.849"
						x2="146.688"
						y2="262.849"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#616166" />
						<stop offset="0.21" stop-color="#9B9B9B" />
						<stop offset="1" stop-color="#48484F" />
					</linearGradient>
					<linearGradient
						id="paint3_linear"
						x1="12.7257"
						y1="364.297"
						x2="146.688"
						y2="364.297"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#616166" />
						<stop offset="0.21" stop-color="#9B9B9B" />
						<stop offset="1" stop-color="#48484F" />
					</linearGradient>
					<linearGradient
						id="paint4_linear"
						x1="9.3813"
						y1="458.104"
						x2="146.69"
						y2="458.104"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#616166" />
						<stop offset="0.21" stop-color="#9B9B9B" />
						<stop offset="1" stop-color="#48484F" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TowerIndicator } from '@/store/types';

@Component
export default class Tower extends Vue {
	@Prop() item!: TowerIndicator;

	get fillingSVGPath() {
		const maxY = 407.7;
		const minY = 16.0;
		const maxHeight = maxY - minY;

		let dHeight = maxY - maxHeight * (this.fillingPercentage / 100);
		if (dHeight < minY) {
			dHeight = minY;
		}

		return `M138.1 ${dHeight}H19.6V407.7H138.1V65.2Z`;
	}

	get isProperlyLoaded() {
		const { value, minValue, maxValue } = this.item;
		return value > minValue && value < maxValue;
	}

	get fillingPercentage() {
		return Math.round((this.item.value / this.item.maxValue) * 100);
	}
}
</script>

<style lang="scss">
.bg-error {
	background-color: red !important;
}
</style>

<style lang="scss" scoped>
.tower {
	width: 200px;
	padding: 0 20px;
	margin-bottom: 50px;
	font-size: 14px;
	text-align: center;

	&__title {
		margin-bottom: 20px;
	}

	&__filling {
		font-size: 26px;
	}

	&__status-bar {
		margin: 0 auto 20px;
		width: 70px;
		height: 3px;
		background-color: #21b149;
	}
}
</style>
