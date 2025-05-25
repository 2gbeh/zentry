interface Comment {
  id: string; // UUID
  user_id: string; // UUID of the user who made the comment
  post_id: string; // UUID of the related post
  message: string; // The comment content
  created_at: string; // ISO string with timezone
  updated_at: string | null; // ISO string without timezone or null
  deleted_at: string | null; // ISO string without timezone or null
}

interface Common {
  id: string; // UUID
  created_at: string; // ISO string with timezone
  updated_at: string | null; // ISO string without timezone or null
  deleted_at: string | null; // ISO string without timezone or null
}

interface File {
  id: string; // UUID
  post_id: string; // UUID of the related post
  filename: string; // File name
  text: string; // Raw file content
  html: string; // Rendered HTML content
  lang: string; // Programming language or format
  created_at: string; // ISO string with timezone
  updated_at: string | null; // ISO string without timezone or null
  deleted_at: string | null; // ISO string without timezone or null
}

interface Like {
  id: string; // UUID
  user_id: string | null; // UUID of the user, nullable
  post_id: string; // UUID of the liked post
  created_at: string; // ISO string with timezone
  updated_at: string | null; // ISO string without timezone or null
  deleted_at: string | null; // ISO string without timezone or null
}

interface Organization {
  id: string; // UUID
  user_id: string; // UUID of the owning user
  name: string; // Organization name (unique)
  image_url: string | null; // Optional image URL
  created_at: string; // ISO string with timezone
  updated_at: string | null; // ISO string without timezone or null
  deleted_at: string | null; // ISO string without timezone or null
}

interface Post {
  id: string;                     // UUID
  user_id: string;               // UUID of the author
  organization_id: string | null;// UUID of the organization, nullable
  project_id: string | null;     // UUID of the project, nullable
  image_url: string;             // Image URL
  title: string;                 // Title of the post
  status: number;                // Smallint status code (e.g., 1 = active)
  created_at: string;            // ISO string with timezone
  updated_at: string | null;     // ISO string without timezone or null
  deleted_at: string | null;     // ISO string without timezone or null
}

interface Project {
  id: string;                    // UUID
  user_id: string | null;       // UUID of the owner, nullable
  title: string;                // Project title (unique)
  description: string | null;   // Optional project description
  created_at: string;           // ISO string with timezone
  updated_at: string | null;    // ISO string without timezone or null
  deleted_at: string | null;    // ISO string without timezone or null
}

interface Share {
  id: string;                    // UUID
  user_id: string | null;       // UUID of the user who shared, nullable
  post_id: string;              // UUID of the shared post
  created_at: string;           // ISO string with timezone
  updated_at: string | null;    // ISO string without timezone or null
  deleted_at: string | null;    // ISO string without timezone or null
}

interface User {
  id: string;                     // UUID
  image_url: string | null;      // Optional profile image URL
  name: string | null;           // Optional full name
  username: string;              // Unique username
  email: string;                 // Unique email
  password: string;              // Hashed password
  remember_token: string | null; // Optional session token
  device: Record<string, any>;   // JSONB device info
  role: number;                  // Role code (e.g., 0 = user)
  status: number;                // Status code (e.g., 0 = inactive)
  verified_at: string | null;    // Timestamp of verification
  created_at: string;            // ISO string with timezone
  updated_at: string | null;     // ISO string without timezone or null
  deleted_at: string | null;     // ISO string without timezone or null
}

interface View {
  id: string;                    // UUID
  user_id: string | null;       // UUID of the user who viewed, nullable
  post_id: string;              // UUID of the viewed post
  created_at: string;           // ISO string with timezone
  updated_at: string | null;    // ISO string without timezone or null
  deleted_at: string | null;    // ISO string without timezone or null
}

interface Waitlist {
  id: string;                  // UUID
  email: string;               // Unique email address
  device: Record<string, any>; // JSONB device info
  created_at: string;          // ISO string with timezone
  updated_at: string | null;   // ISO string without timezone or null
  deleted_at: string | null;   // ISO string without timezone or null
}
