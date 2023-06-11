import { getServerSession } from "next-auth";

import { authOptions } from "@src/libs/auth";

const getSession = async () => await getServerSession(authOptions);

export default getSession;
