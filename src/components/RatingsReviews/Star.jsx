export default function Star({pctFilled}) {

	const tailwindClass = `bg-black w-${pctFilled.toString()}%`;
	const pctString = pctFilled.toString()+'%';

	return (
		<div className="rating w-fit">
			<div className="mask mask-star text-7xl">
				<div className="bg-black" style={{width: pctString}}>.</div>
			</div>
		</div>
	)
}