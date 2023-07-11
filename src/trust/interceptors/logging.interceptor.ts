import {CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor} from "@nestjs/common";
import {Observable, tap} from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.info(`\n----> START <----`)
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const url = req.url;
        const request = req.body;
        console.info(`=== Method : ${method}, \n=== URL : ${url}`);
        console.info(`=== Request : ${JSON.stringify(request)}`);
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => {
                    console.log(`=== Exec Time : ${Date.now() - now} ms`)
                    console.log(`----> END <----\n`)
                }),
            );
    }
}
