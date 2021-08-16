import { IsString } from 'class-validator';
import { OPERATIONS } from 'src/common/constants';

export class CreatePermissionDto {
  @IsString()
  readonly operation: OPERATIONS;
}
