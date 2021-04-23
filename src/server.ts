import { app } from "./app";
import logger from "./helpers/logger";

const { PORT } = process.env;
const { NODE_ENV } = process.env;

app.listen(PORT, () => {
  logger.info(`Server running in ${NODE_ENV} on port ${PORT}`);
});
