import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
    @Get()
    getBooks(){
        return 'we get all dogs';
    }
}