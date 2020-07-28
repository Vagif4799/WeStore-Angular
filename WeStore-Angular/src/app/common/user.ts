export class User {
  private id: number;
  private userId: string;
  private  firstName: string;
  private  lastName: string;
  private  userName: string;
  private  email: string;
  private  profileImageUrl: string;
  private  lastLoginDateDisplay: Date;
  private  joinDate: Date;
  private  role: string;
  private  authorities: [];
  private  isActive: boolean;
  private  isNotLocked: boolean;

  public User() {
  this.firstName = '';
  this.lastName = '';
  this.userName = '';
  this.email = '';
  this.role = '';
  this.authorities = [];
  this.isActive = false;
  this.isNotLocked = false;
}
}
