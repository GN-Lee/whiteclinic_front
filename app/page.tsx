import { Reservation } from "@/components/reservation/Reservation";
import { RiderList } from "@/components/riderList/RiderList";
import { RiderEnroll } from "@/components/riderList/riderEnroll/RiderEnroll";
import { RiderUpdate } from "@/components/riderList/riderUpdate/RiderUpdate";
import { ReservationEnroll } from "@/components/reservation/reservationEnroll/ReservationEnroll";
import { ReservationUpdate } from "@/components/reservation/reservationUpdate/ReservationUpdate";
import { Sales } from "@/components/sales/Sales";
export default function Home() {
  return (
    <div>
      {/* <Reservation /> */}
      {/* <RiderList /> */}
      {/* <RiderEnroll /> */}
      {/* <RiderUpdate /> */}
      {/* <ReservationEnroll /> */}
      {/* <ReservationUpdate /> */}
      <Sales />
    </div>
  );
}
