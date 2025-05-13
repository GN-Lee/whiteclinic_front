import { Reservation } from "@/components/reservation/Reservation";
import { RiderList } from "@/components/riderList/RiderList";
import { RiderEnroll } from "@/components/riderList/riderEnroll/RiderEnroll";
import { RiderUpdate } from "@/components/riderList/riderUpdate/RiderUpdate";
import { ReservationEnroll } from "@/components/reservation/reservationEnroll/ReservationEnroll";
import { ReservationUpdate } from "@/components/reservation/reservationUpdate/ReservationUpdate";
import { Sales } from "@/components/sales/Sales";
import { ReservationInfo } from "@/components/reservation/reservationInfo/ReservationInfo";
import { ProcessRev } from "@/components/reservation/ProcessRev";
import { ExpiredRev } from "@/components/reservation/ExpiredRev";
import Loginpage from "@/app/login/Login";
import { Verification } from "@/components/verificationPending/Verification";

export default function Home() {
  return (
    <div>
      {/* <Reservation /> // 예약 목록 */}
      {/* <ProcessRev /> // 진행중인 예약 */}
      {/* <ExpiredRev /> // 완료된 예약건 */}
      {/* <ReservationInfo /> // 예약 상세정보 */}
      {/* <ReservationEnroll /> // 예약 등록 */}
      {/* <ReservationUpdate /> // 예약 수정 */}
      <RiderList /> // 기사 목록
      {/* <RiderEnroll /> // 기사 등록 */}
      {/* <RiderUpdate /> // 기사 수정 */}
      {/* <Sales /> // 매출 현황 */}
      {/* <Loginpage /> // 로그인 */}
      {/* <Verification /> // 회원가입 인증 대기중 */}
    </div>
  );
}
