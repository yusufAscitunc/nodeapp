export const QUERY = {
  CREATE_TABLE_VIEWERS:
    "CREATE TABLE IF NOT EXISTS `viewers` (" +
    "id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT," +
    "name varchar(255) NOT NULL," +
    "email varchar(255)," +
    "is_owner BOOLEAN DEFAULT false );",

  CREATE_TABLE_BRANCHES:
    "CREATE TABLE IF NOT EXISTS `branches` (" +
    "branch_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT," +
    "name varchar(255) NOT NULL," +
    "full_address varchar(255)," +
    "longitude varchar(255) NOT NULL," +
    "latitude varchar(255)," +
    "phone varchar(255) );",
};
