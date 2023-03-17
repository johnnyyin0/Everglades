export default function Star({pctFilled}) {

	const pctString = pctFilled.toString()+'%';
  const restStr = (100-pctFilled).toString()+'%';

	return (
		<div className="rating w-fit h-10">
			<div name="rating-1" className="mask mask-star shadow text-7xl">
				<div className="bg-black mx-0" style={{width: pctString}}>.</div>
				<div className="bg-slate-200 mx-0 place-content-end z-10" style={{width:restStr}}>.</div>
			</div>
		</div>
	)
}