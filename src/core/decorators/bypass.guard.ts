import { SetMetadata } from '@nestjs/common';

export const BypassAdmin = () => SetMetadata('skipAdmin', true);
