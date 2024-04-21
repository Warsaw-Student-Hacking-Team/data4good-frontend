import {RemixConfig} from "@remix-run/dev/dist/config";
import {defineRoutes} from "@remix-run/dev/dist/config/routes";

const routes = (defineRoutes): RemixConfig['routes'] => {
    return defineRoutes((route) => {
        route("/", "views/landing/route.tsx", {index: true});
        route("emulator", "views/emulator/route.tsx");
        route("app", "views/app/layout.tsx", () => {
            route("", "views/app/dashboard/route.tsx", {index: true});
            route("bike/rental", "views/app/bikeRental/routes/rental.route.tsx");
            route("bike/riding", "views/app/bikeRental/routes/riding.route.tsx");
        });
        route("admin", "views/admin/route.tsx");
    });
};

export default routes;