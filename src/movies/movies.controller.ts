import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
	@Get()
	getAll() {
		return 'This will return all movies';
	}

	@Get('/:id')
	getOne(@Param('id') id: string) {
		return `This will return one movie with the id: ${id}`;
	}

	@Post()
	create(@Body() movieData) {
		console.log(movieData);
		return 'This will create a movie';
	}

	@Delete('/:id')
	remove(@Param('id') movieId: string) {
		return `This Will delete a movie with the id: ${movieId}`;
	}

	@Patch('/:id')
	patch(@Param('id') movieId: string) {
		return `This will patch a movie with the id: ${movieId}`;
	}
}
