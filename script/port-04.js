const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const sliderFirst = document.querySelector('.slider-first');
const sliderSecond = document.querySelector('.slider-second');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl
	.fromTo(
		sliderFirst,
		0.5,
		{ x: '-100%' },
		{ x: '0', ease: Power2.easeInOut },
	)
	.fromTo(
		hero,
		1,
		{ height: '0%' },
		{ height: '80%', ease: Power2.easeInOut }
	)
	.fromTo(
		hero,
		1.2,
		{ width: '100%' },
		{ width: '80%', ease: Power2.easeInOut }
	)
	.fromTo(
		sliderSecond,
		0.5,
		{ x: '-100%' },
		{ x: '0', ease: Power2.easeInOut },
		'-=0.5'
	)
	.fromTo(
		headline,
		1,
		{ y: '100%' },
		{ y: '-90%', ease: Power2.easeInOut },
		'-=0.5'
	)