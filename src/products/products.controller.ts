import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PRODUCT_SERVICE } from '../config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { PaginationDto } from '../common/dto/pagination.dto';
import { catchError, firstValueFrom } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE)
    private readonly productClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'Crear un producto';
  }

  @Get()
  findAllProducts(@Query() paginationDto: PaginationDto): any {
    return this.productClient.send({ cmd: 'find_all_products' }, paginationDto);
  }

  @Get(':id')
  async findOneProduct(@Param('id') id: string) {
    return this.productClient.send({ cmd: 'find_one_product' }, { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
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
