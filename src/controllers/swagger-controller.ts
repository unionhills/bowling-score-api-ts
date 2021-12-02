import { Request, Response } from 'express';
import { Controller, Get, Middleware } from '@overnightjs/core';
import { StatusCodes } from 'http-status-codes';
import { Environment } from '../environment';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../swagger';
import Logger from 'jet-logger';

/**
 * Simple path to be able to tell whether or not the API is up and running.
 * The format of the JSON corresponds to a proposed standard.
 *
 */
@Controller(Environment.getInstance().apiPrefix + 'docs')
export class SwaggerController {
    @Get()
//  @Middleware(swaggerUi.setup(swaggerDocument))
    public getMessage(req: Request, res: Response): Response {
//      return res.status(StatusCodes.OK).send("<h1>Test Message</h1>");
        return res.status(StatusCodes.OK).json({ status: 'pass' });
    }
}
