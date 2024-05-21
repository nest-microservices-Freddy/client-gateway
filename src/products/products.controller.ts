import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'Crear un producto';
  }

  @Get()
  findAllProducts() {
    return 'Esta funcion regresa varios productos';
  }

  @Get(':id')
  findOneProducts(@Param('id') id: string) {
    return 'Esta funcion regresa un producto' + id;
  }

  @Delete(':id')
  deleteProducts(@Param('id') id: string) {
    return 'Esta funcion elimina un producto' + id;
  }

  @Patch(':id')
  patchProducts(@Param('id') id: string, @Body() body: any) {
    return 'Esta funcion actualiza un producto' + id;
  }
}
