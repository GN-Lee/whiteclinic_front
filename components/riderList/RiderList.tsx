import { riderList } from "@/data/data";
import { RiderInfoList } from "@/types/types";

export const RiderList = () => {
  const rider: RiderInfoList = riderList();
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-lg text-black">
      <h1 className="flex justify-center text-2xl font-bold bg-gradient-to-r from-blue-700 to-white bg-clip-text text-transparent">
        기사님 상세정보 & 목록
      </h1>
      <input
        type="search"
        placeholder="기사님 이름 또는 전화번호로 검색"
        className="w-1/2 border border-gray-300 rounded-md p-2"
      />
      <div className="flex flex-col gap-4">
        {rider.map((rider) => (
          <div key={rider.id}>
            <h2>{rider.name}</h2>
            <p>{rider.age}</p>
            <p>{rider.phone}</p>
            <p>{rider.address}</p>
            <p>{rider.email}</p>
            <p>{`${rider.benefit}%`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiderList;
