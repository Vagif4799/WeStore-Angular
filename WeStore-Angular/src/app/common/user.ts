export class User {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  profileImageUrl: string;
  lastLoginDateDisplay: Date;
  joinDate: Date;
  role: string;
  authorities: [];
  active: boolean;
  notLocked: boolean;
  password: string;

  public User() {
  this.firstName = '';
  this.lastName = '';
  this.userName = '';
  this.email = '';
  this.role = '';
  this.authorities = [];
  this.active = false;
  this.notLocked = false;
  this.password = '';
}
}
