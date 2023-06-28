import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesValidos } from '../interfaces';
import { RoleProtected } from './role-protected.decorator';
import { UseRoleGuard } from '../guards/use-role.guard';

export function Auth(...roles: RolesValidos[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard(), UseRoleGuard),
  );
}