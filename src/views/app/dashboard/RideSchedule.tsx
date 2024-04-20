
// When using `Day.js`
// import {Calendar, dayjsLocalizer} from 'react-big-calendar'
// import dayjs from 'dayjs'
// // and, for optional time zone support
// import timezone from 'dayjs/plugin/timezone'
// import 'react-big-calendar/lib/css/react-big-calendar.css'
//
// dayjs.extend(timezone)
// // end optional time zone support
//
// // Note that the dayjsLocalizer extends Day.js with the following plugins:
// // - IsBetween
// // - IsSameOrAfter
// // - IsSameOrBefore
// // - LocaleData
// // - LocalizedFormat
// // - MinMax
// // - UTC
//
// const localizer = dayjsLocalizer(dayjs)

import {PiCarProfileFill} from "react-icons/pi";
import {TRIP_TYPE, TripType} from "~/lib/tripType";


const schedule = [
    {
        label: 'Trip to work',
        time: '19:30',
        weekDay: 'MON',
        day: 21,
        tripType: TRIP_TYPE.RIDE_OFFERED
    },
    {
        label: 'Trip to work',
        time: '19:30',
        weekDay: 'WED',
        day: 23,
        tripType: TRIP_TYPE.RIDE_REQUESTED
    }
]

const getRowClassName = (tripType: TripType) => {
    if(tripType === TRIP_TYPE.RIDE_REQUESTED) return 'bg-transparent text-[#58c55f] border-[#58c55f]'
    return 'bg-[#58c55f] text-white border-[#58c55f]'
}

const TripDescription = ({tripType}: {tripType: TripType}) => {
    switch (tripType) {
        case TRIP_TYPE.BIKE_RENTAL:
            return (
                <>
                    <span className="mr-2">You rented a bike.</span>
                    <PiCarProfileFill className="w-5 h-5"/>
                </>
            )
        case TRIP_TYPE.RIDE_OFFERED:
            return (
                <>
                    <span className="mr-2">Your are offering a ride.</span>
                    <PiCarProfileFill className="w-5 h-5"/>
                </>
            )
        case TRIP_TYPE.RIDE_REQUESTED:
            return (
                <>
                    <span className="mr-2">You requested a ride.</span>
                    <PiCarProfileFill className="w-5 h-5"/>
                </>
            )
        default:
            return null
    }
}

const ScheduleRow = ({scheduleEntry}) => {
    return (
        <>
            <div className="">
            <div className="text-center">
                    <span className="block">{scheduleEntry.weekDay}</span>
                    <span className="block text-lg">{scheduleEntry.day}</span>
                </div>
            </div>
            <div className={[
                'col-span-3 rounded px-2 py-1 border',
                getRowClassName(scheduleEntry.tripType)
            ].join(' ')}>
                    <span className="font-bold block">
                        {scheduleEntry.label}: {scheduleEntry.time}
                    </span>
                <span className="mt-0.5 flex">
                        <TripDescription tripType={scheduleEntry.tripType} />
                </span>
            </div>
        </>
    )
}

const RideSchedule = () => {
    return (
        <div className="">
            <div className="grid grid-cols-4 gap-y-5">
                {
                    schedule.map(scheduleEntry => (
                        <ScheduleRow scheduleEntry={scheduleEntry} />
                    ))
                }
            </div>
        </div>
    )
}

export default RideSchedule