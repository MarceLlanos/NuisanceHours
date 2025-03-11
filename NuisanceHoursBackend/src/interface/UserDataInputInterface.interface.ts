export interface UserDataInputInterface {
    email: string;
    name: string;
    employee_no: number;
    new_manager: string | null;
    old_manager: string | null;
    new_address: string;
    new_street: string;
    new_city: string;
    new_zip: string;
    old_address: string | null;
    new_work_address: string | null;
    old_work_address: string | null;
    manager_email: string | null;
    manager_phone: string | null;
    phone: string | null;
    status: string | null;
  }