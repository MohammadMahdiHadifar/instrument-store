export interface ILoginDto {
  message: any;
  status: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
  data: {
    user: {
      _id: string;
      firstname: string;
      lastname: string;
      username: string;
      password: string;
      phoneNumber: number;
      address: string;
      role: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
      refreshToken: string;
    };
  };
}