export const TRIP_TYPE = {
    BIKE_RENTAL: 'BIKE_RENTAL',
    RIDE_REQUESTED: 'RIDE_REQUESTED',
    RIDE_OFFERED: 'RIDE_OFFERED'
} as const;

export type TripType = typeof TRIP_TYPE[keyof typeof TRIP_TYPE];