export default function Star({pctFilled}) {

	const pctString = pctFilled.toString()+'%';
  const restStr = (100-pctFilled).toString()+'%';

	return (
		<div className="rating w-fit h-min flex-row">
			<div name="rating-1" className="mask mask-star shadow text-7xl mx-0 h-5">
				<div className="bg-black mx-0 float-left" style={{width: pctString}}>.</div>
				<div className="bg-slate-200 mx-0 float-right z-10" style={{width:restStr}}>.</div>
			</div>
		</div>
	)
}