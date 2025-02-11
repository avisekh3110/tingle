interface DataViewProps {
  time: string;
  data: string;
}

function DataView(props: DataViewProps) {
  return (
    <div className="">
      <div className="text-slate-300 text-sm font-mono flex justify-center items-center gap-2">
        <div className="h-[1px] w-1/2 bg-[#FFFFFF29]"></div>
        <div>{props.time}</div>
        <div className="h-[1px] w-1/2 bg-[#FFFFFF29]"></div>
      </div>
      <div className="text-slate-300 text-lg font-mono">{props.data}</div>
    </div>
  );
}

export default DataView;
