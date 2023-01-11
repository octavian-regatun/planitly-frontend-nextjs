import axios from "axios";
import { UpdateUserDto } from "../../dto/UpdateUserDto";

export async function updateUser(userId: number, updateUserDto: UpdateUserDto) {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`,
      {
        ...updateUserDto,
      }
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
