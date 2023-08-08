import { UserService } from '@/modules/user/user.service';

export async function IDGenerator(service: UserService): Promise<string> {
  let uid = generate();
  let checkAlreadyExists: boolean = await service.checkID(uid);

  while (checkAlreadyExists) {
    uid = generate();
    checkAlreadyExists = await service.checkID(uid);
  }

  return uid;
}

function generate(): string {
  let uid = Math.random().toString().split('.')[1];

  while (uid.length < 8) {
    uid += Math.random().toString().split('.')[1];
  }

  uid = uid.slice(0, 8);

  return uid;
}
