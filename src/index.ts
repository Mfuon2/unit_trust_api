import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { Server } from "./Server";

async function bootstrap() {
  try {
    const platform = await PlatformExpress.bootstrap(Server);
    await platform.listen();
    process.on("SIGINT", () => {
      $log.info(`----- stopping server ----- `)
      platform.stop();
    });
  } catch (error) {
    $log.error({ event: "SERVER_BOOTSTRAP_ERROR", message: error.message, stack: error.stack });
  }
}

bootstrap().then(r => {$log.info(`----- server started ----- `)})
