"use client";
import { data, riderList } from "../../data/data";
import { ReservationList, RiderInfoList } from "../../types/types";
import { useRouter } from "next/navigation";

export const Reservation = () => {
  const reservationList: ReservationList = data();
  // const RiderList: RiderInfoList = riderList();
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div
      id="reservation"
      className="flex flex-col gap-4 bg-white p-4 rounded-lg"
    >
      <h1 className="flex justify-center text-2xl font-bold bg-gradient-to-r from-blue-700 to-white bg-clip-text text-transparent">
        예약 목록
      </h1>
      <div className="flex justify-between items-center gap-2 mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => handleClick("/reservation/process")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            진행중인 예약
          </button>
          <button
            onClick={() => handleClick("/reservation/expired")}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            완료된 예약
          </button>
        </div>
        <button
          onClick={() => handleClick("/reservation/enroll")}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          예약 생성하기
        </button>
      </div>
      {reservationList.map((reservation) => (
        <div
          key={reservation.id}
          className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-lg font-bold text-gray-800">
                수리 물품: {reservation.item}
              </h3>

              <span className="text-blue-500 font-semibold">
                {reservation.price}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm font-bold">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">
                  고객명: {reservation.name}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-600">
                  방문시간: {reservation.time}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-600">
                  방문날짜: {reservation.date}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-600">
                  전화번호: {reservation.phone}
                </span>
              </div>

              <div className="flex items-center space-x-2 col-span-2">
                <span className="text-gray-600">
                  주소: {reservation.address}
                </span>
              </div>
            </div>

            {/* {RiderList.map((rider) => (
              <div key={rider.id}>
                <span>{rider.name}</span>
              </div>
            ))} */}

            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleClick("/reservation/detail")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
              >
                <span>상세정보</span>
              </button>
              <button
                onClick={() => handleClick("/reservation/update")}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors flex items-center"
              >
                <span>예약 수정하기</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservation;
