import { BadRequestException, UseFilters } from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { RegisterRepose } from "./types/user.types";
import { RegisterDto } from "./dto/user.dto";
import { UsersService } from "./users.service";

@Resolver('User')
export class UsersResolver {
    constructor(
        private readonly userService: UsersService) { }

    @Mutation(() => RegisterRepose)
    async register(
        @Args('registerInput') registerDto: RegisterDto,
        @Context() context: { res: Response },
    ): Promise<RegisterRepose> {
        if (!registerDto.name || !registerDto.email || !registerDto.password)
            throw new BadRequestException('Please fill the all fields');

        const user = await this.userService.register(registerDto, context.res)
        return { user };
    }
}