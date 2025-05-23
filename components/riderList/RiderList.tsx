"use client";
import { useRiderStore } from "@/store/rider/SearchRider";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const RiderList = () => {
  const router = useRouter();

  const { search, setSearch, filteredRiders } = useRiderStore();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-4 text-black">
      <h1 className="flex justify-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        기사님 상세정보 & 목록
      </h1>

      <div className="flex justify-between gap-2 mb-4">
        <Link
          href="/verify"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => handleClick("/verify")}
        >
          회원가입 인증 대기
        </Link>
        <Link
          href="/rider/enroll"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => handleClick("/rider/enroll")}
        >
          기사 등록
        </Link>
      </div>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="기사님 이름 또는 전화번호로 검색"
        className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 mx-auto"
      />

      <div className="flex flex-col gap-4">
        {filteredRiders.map((rider) => (
          <div
            key={rider.id}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between mb-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {rider.name[0]}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-blue-600">
                  {rider.name}
                </h2>
              </div>

              <Link
                href={`/rider/update?name=${rider.name}`}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                onClick={() => handleClick(`/rider/update?name=${rider.name}`)}
              >
                기사님 정보수정
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">나이:</span>
                <p className="font-medium">{rider.age}세</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">연락처:</span>
                <p className="font-medium">{rider.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">주소:</span>
                <p className="font-medium">{rider.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">이메일:</span>
                <p className="font-medium">{rider.email}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <p className="text-lg font-bold text-blue-600">
                수수료: {rider.benefit}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiderList;
