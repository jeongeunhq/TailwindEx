export interface CardProps {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export default function Card({title, id}: CardProps) {
    return (
      <div className="flex flex-row items-center gap-4 p-4 ">
        <div className="box-border h-32 w-32 p-2 border-2 bg-gray-300"></div>
      <div className="flex flex-col items-start w-[600px]">
          <h1 className="text-lg font-bold text-gray-900">
            {title}
          </h1>
          <h1 className="mt-[30px] text-base text-gray-900">
            {id}
          </h1>
        </div>
      </div>
    );
  }
  