export interface UserDto {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface SupportDto {
    url: string;
    text: string;
}

export interface PaginatedUsersDto {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserDto[];
    support: SupportDto;
}
