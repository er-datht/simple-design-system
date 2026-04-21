# API Integration Guide for AI Agents

## Overview

This document provides comprehensive instructions for AI agents to integrate with RESTful APIs. It covers common patterns, authentication methods, data handling, and best practices that can be adapted to any project.

## Table of Contents

- [Understanding the API](#understanding-the-api)
- [Authentication Methods](#authentication-methods)
- [Base Configuration](#base-configuration)
- [HTTP Methods & CRUD Operations](#http-methods--crud-operations)
- [Common API Patterns](#common-api-patterns)
- [Data Models](#data-models)
- [File Operations](#file-operations)
- [Error Handling](#error-handling)
- [Implementation Guidelines](#implementation-guidelines)
- [Best Practices](#best-practices)

---

## Understanding the API

### Step 1: Discover Available Endpoints

Before integrating, you need to identify available endpoints. Common discovery methods:

1. **Read API Documentation** - Check for OpenAPI/Swagger docs, README files, or API documentation
2. **Examine Service Files** - Look in service layer files (e.g., `src/services/`, `api/`, `lib/`)
3. **Check Endpoint Constants** - Find endpoint definitions (e.g., `constants/endpoints.js`, `config/api.js`)
4. **Review Network Calls** - Inspect existing API calls in the codebase
5. **Check API Client Configuration** - Locate base URL and interceptor setup

### Step 2: Identify Endpoint Patterns

Look for patterns in endpoint structure:

```
/api/v1/{resource}              # List all
/api/v1/{resource}/{id}         # Get specific
/api/v1/{resource}              # Create (POST)
/api/v1/{resource}/{id}         # Update (PUT/PATCH)
/api/v1/{resource}/{id}         # Delete
/api/v1/{resource}/{id}/{sub}   # Nested resources
```

### Step 3: Understand Data Flow

```
Client Request → Headers/Auth → API Endpoint → Backend Processing → Response
```

---

## Authentication Methods

### 1. Bearer Token Authentication

**Most Common Method**

**How it Works:**

1. Client sends credentials to authentication endpoint
2. Server returns access token
3. Client includes token in Authorization header for subsequent requests

**Implementation:**

```javascript
// Step 1: Get Token
const response = await fetch("/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password }),
});
const { access_token } = await response.json();

// Step 2: Store Token
localStorage.setItem("access_token", access_token);

// Step 3: Use Token in Requests
const headers = {
  Authorization: `Bearer ${access_token}`,
  "Content-Type": "application/json",
};
```

### 2. API Key Authentication

**For Service-to-Service Communication**

```javascript
const headers = {
  "X-API-Key": "your-api-key",
  "Content-Type": "application/json",
};
```

### 3. Session-Based Authentication

**Using Cookies**

```javascript
// Server sets cookie, browser automatically includes it
fetch("/api/resource", {
  credentials: "include", // Include cookies
});
```

### 4. OAuth 2.0

**For Third-Party Applications**

```javascript
// Authorization Code Flow
// 1. Redirect to authorization server
// 2. User grants permission
// 3. Exchange code for access token
// 4. Use access token for API calls
```

### Common Authentication Endpoints

- `POST /auth/login` or `/oauth/token` - Get access token
- `POST /auth/refresh` - Refresh expired token
- `POST /auth/logout` - Invalidate token
- `GET /auth/me` or `/user/me` - Get current user info

---

## Base Configuration

### 1. Locate Configuration Files

Common locations for API configuration:

- `config/api.js`, `config/axios.js`
- `src/services/api.js`, `src/lib/api.js`
- `.env`, `.env.local` for environment variables
- `constants/endpoints.js`, `constants/api.js`

### 2. Identify Base URL

**Environment Variables** (Most Common):

```javascript
// Check .env files
REACT_APP_API_URL=https://api.example.com
NEXT_PUBLIC_API_URL=https://api.example.com
VITE_API_URL=https://api.example.com
API_BASE_URL=https://api.example.com

// Usage in code
const BASE_URL = process.env.REACT_APP_API_URL;
```

### 3. Standard Request Headers

```javascript
const defaultHeaders = {
  "Content-Type": "application/json", // For JSON payloads
  Accept: "application/json", // Expect JSON response
  Authorization: `Bearer ${token}`, // Authentication
  // Optional custom headers:
  "X-API-Version": "v1", // API versioning
  "X-Request-ID": generateUUID(), // Request tracking
  "X-Client-Version": "1.0.0", // Client version
  // Context-specific headers:
  "X-Project-Id": projectId, // Multi-tenant context
  "X-Organization-Id": orgId, // Organization context
  "X-Tenant-Id": tenantId, // Tenant context
};
```

### 4. Axios Client Setup Example

```javascript
import axios from "axios";

// Create instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### 5. Fetch API Setup Example

```javascript
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem("access_token");

    const config = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  get(endpoint, options) {
    return this.request(endpoint, { ...options, method: "GET" });
  }

  post(endpoint, data, options) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  put(endpoint, data, options) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  delete(endpoint, options) {
    return this.request(endpoint, { ...options, method: "DELETE" });
  }
}

export default new ApiClient(process.env.REACT_APP_API_URL);
```

---

## HTTP Methods & CRUD Operations

### Standard HTTP Methods

```
GET     - Retrieve data (read-only, no side effects)
POST    - Create new resource or submit data
PUT     - Update entire resource (replace)
PATCH   - Partial update of resource
DELETE  - Remove resource
HEAD    - Get headers only (no body)
OPTIONS - Get allowed methods for endpoint
```

### RESTful CRUD Pattern

For any resource (users, products, orders, etc.):

```javascript
// CREATE - Add new resource
POST /api/resources
Body: { name: "New Resource", ... }
Response: { id: "123", name: "New Resource", ... }

// READ - Get all resources
GET /api/resources?page=1&limit=10
Response: { items: [...], total: 100, page: 1, limit: 10 }

// READ - Get specific resource
GET /api/resources/{id}
Response: { id: "123", name: "Resource Name", ... }

// UPDATE - Full replace
PUT /api/resources/{id}
Body: { name: "Updated Name", field2: "value", ... }
Response: { id: "123", name: "Updated Name", ... }

// UPDATE - Partial update
PATCH /api/resources/{id}
Body: { name: "New Name" }
Response: { id: "123", name: "New Name", ... }

// DELETE - Remove resource
DELETE /api/resources/{id}
Response: { message: "Deleted successfully" } or 204 No Content
```

### Nested Resources

```javascript
// Get items belonging to parent
GET / api / users / { userId } / orders;
GET / api / projects / { projectId } / tasks;

// Create item under parent
POST / api / users / { userId } / orders;
POST / api / projects / { projectId } / tasks;
```

### Query Parameters

Common query parameters for list endpoints:

```javascript
?page=1              // Pagination page number
&limit=20            // Items per page
&offset=0            // Skip items
&sort=created_at     // Sort field
&order=desc          // Sort direction (asc/desc)
&search=keyword      // Search term
&filter[status]=active  // Filter by field
&fields=id,name,email   // Select specific fields
&include=relations   // Include related data
```

---

## Common API Patterns

### 1. List Resources with Pagination

```javascript
async function listResources(params = {}) {
  const queryParams = new URLSearchParams({
    page: params.page || 1,
    limit: params.limit || 10,
    ...params.filters,
  });

  const response = await api.get(`/resources?${queryParams}`);
  return response.data;
}

// Usage
const { items, total, page } = await listResources({
  page: 1,
  limit: 20,
  filters: { status: "active" },
});
```

### 2. Get Single Resource

```javascript
async function getResource(id) {
  const response = await api.get(`/resources/${id}`);
  return response.data;
}
```

### 3. Create Resource

```javascript
async function createResource(data) {
  const response = await api.post("/resources", data);
  return response.data;
}

// Usage
const newResource = await createResource({
  name: "Resource Name",
  description: "Description",
});
```

### 4. Update Resource

```javascript
// Full update (PUT)
async function updateResource(id, data) {
  const response = await api.put(`/resources/${id}`, data);
  return response.data;
}

// Partial update (PATCH)
async function patchResource(id, data) {
  const response = await api.patch(`/resources/${id}`, data);
  return response.data;
}
```

### 5. Delete Resource

```javascript
async function deleteResource(id) {
  const response = await api.delete(`/resources/${id}`);
  return response.data;
}
```

### 6. Bulk Operations

```javascript
// Bulk create
POST /api/resources/bulk
Body: { items: [{...}, {...}, {...}] }

// Bulk update
PATCH /api/resources/bulk
Body: { ids: ["1", "2"], updates: {...} }

// Bulk delete
DELETE /api/resources/bulk
Body: { ids: ["1", "2", "3"] }
```

### 7. Search & Filter

```javascript
// Text search
GET /api/resources/search?q=keyword

// Advanced filters
GET /api/resources?filter[status]=active&filter[category]=tech

// Date range
GET /api/resources?start_date=2025-01-01&end_date=2025-12-31
```

### 8. Related Resources

```javascript
// Get related items
GET / api / users / { userId } / posts;
GET / api / posts / { postId } / comments;

// Create related item
POST / api / users / { userId } / posts;
POST / api / posts / { postId } / comments;
```

---

## Data Models

### 1. Standard Success Response Formats

**Wrapped Response (Common):**

```javascript
{
  data: {
    // Actual data here
  },
  message: "Success message",
  status: 200,
  success: true
}
```

**Direct Response:**

```javascript
{
  id: "123",
  name: "Resource Name",
  createdAt: "2025-11-27T10:00:00Z"
}
```

**Array Response:**

```javascript
[
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
];
```

### 2. Pagination Patterns

**Offset-Based Pagination:**

```javascript
{
  data: {
    items: [...],
    pagination: {
      total: 100,
      page: 1,
      limit: 10,
      totalPages: 10,
      hasNext: true,
      hasPrev: false
    }
  }
}
```

**Cursor-Based Pagination:**

```javascript
{
  data: {
    items: [...],
    pagination: {
      nextCursor: "eyJpZCI6MTIzfQ==",
      prevCursor: null,
      hasMore: true
    }
  }
}
```

**Link-Based Pagination (REST):**

```javascript
{
  data: [...],
  links: {
    first: "/api/resources?page=1",
    prev: "/api/resources?page=1",
    next: "/api/resources?page=3",
    last: "/api/resources?page=10"
  }
}
```

### 3. Error Response Formats

**Standard Error:**

```javascript
{
  error: {
    message: "Resource not found",
    code: "RESOURCE_NOT_FOUND",
    status: 404
  }
}
```

**Validation Error:**

```javascript
{
  error: {
    message: "Validation failed",
    code: "VALIDATION_ERROR",
    status: 400,
    details: [
      { field: "email", message: "Invalid email format" },
      { field: "age", message: "Must be at least 18" }
    ]
  }
}
```

**RFC 7807 Problem Details:**

```javascript
{
  type: "https://api.example.com/errors/validation-error",
  title: "Validation Error",
  status: 400,
  detail: "The request body contains invalid data",
  instance: "/api/users/123",
  errors: [...]
}
```

### 4. Common Data Types

**Date/Time Formats:**

```javascript
{
  createdAt: "2025-11-27T10:00:00Z",        // ISO 8601 (preferred)
  updatedAt: "2025-11-27T10:00:00.000Z",    // ISO 8601 with milliseconds
  timestamp: 1732705200,                     // Unix timestamp
  date: "2025-11-27"                        // Date only
}
```

**ID Formats:**

```javascript
{
  id: "123",                    // String numeric
  id: "550e8400-e29b-41d4-a716-446655440000",  // UUID
  id: "507f1f77bcf86cd799439011",  // MongoDB ObjectId
  id: 123                       // Numeric
}
```

**Status/Enum Fields:**

```javascript
{
  status: "active",             // String enum
  status: "ACTIVE",             // Uppercase
  statusCode: 1,                // Numeric enum
  isActive: true                // Boolean
}
```

---

## File Operations

### 1. Direct Upload to API Server

**Simple File Upload:**

```javascript
async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("name", file.name);

  const response = await fetch("/api/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // Don't set Content-Type - browser sets it with boundary
    },
    body: formData,
  });

  return response.json();
}
```

**Multiple Files:**

```javascript
const formData = new FormData();
files.forEach((file, index) => {
  formData.append(`files[${index}]`, file);
});
// or
files.forEach((file) => {
  formData.append("files", file);
});
```

### 2. Presigned URL Upload (S3, Cloud Storage)

**Workflow:**

```
1. Request presigned URL from API
2. Upload file directly to cloud storage
3. (Optional) Notify API of successful upload
```

**Implementation:**

```javascript
// Step 1: Get presigned URL
async function getPresignedUrl(fileName, fileType) {
  const response = await api.post("/upload/presigned-url", {
    fileName: fileName,
    fileType: fileType,
    folder: "uploads",
  });
  return response.data;
}

// Step 2: Upload to cloud storage
async function uploadToS3(presignedData, file) {
  const formData = new FormData();

  // Add all fields from presigned response (order matters!)
  Object.keys(presignedData.fields).forEach((key) => {
    formData.append(key, presignedData.fields[key]);
  });

  // File must be last
  formData.append("file", file);

  // Upload directly to S3 (no auth headers needed)
  await fetch(presignedData.url, {
    method: "POST",
    body: formData,
  });

  return presignedData.fields.key; // S3 object key
}

// Step 3: Complete upload (if needed)
async function completeUpload(fileKey, metadata) {
  return await api.post("/upload/complete", {
    fileKey: fileKey,
    metadata: metadata,
  });
}

// Full workflow
async function uploadFileToCloud(file) {
  const presignedData = await getPresignedUrl(file.name, file.type);
  const fileKey = await uploadToS3(presignedData, file);
  await completeUpload(fileKey, { size: file.size, name: file.name });
  return fileKey;
}
```

### 3. File Download

**Direct Download:**

```javascript
async function downloadFile(fileId) {
  const response = await fetch(`/api/files/${fileId}/download`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "filename.pdf";
  a.click();
  window.URL.revokeObjectURL(url);
}
```

**Get Download URL:**

```javascript
async function getDownloadUrl(fileId) {
  const response = await api.get(`/files/${fileId}/download-url`);
  return response.data.url; // Temporary signed URL
}
```

**Streaming Large Files:**

```javascript
async function downloadLargeFile(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  const chunks = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  const blob = new Blob(chunks);
  // Process blob
}
```

### 4. File Metadata Operations

```javascript
// List files
GET /api/files?folder=/uploads&type=image

// Get file info
GET /api/files/{fileId}

// Update file metadata
PATCH /api/files/{fileId}
Body: { name: "new-name.pdf", tags: ["important"] }

// Delete file
DELETE /api/files/{fileId}

// Copy file
POST /api/files/{fileId}/copy
Body: { destination: "/new-folder/" }

// Move file
POST /api/files/{fileId}/move
Body: { destination: "/new-folder/" }
```

---

## Error Handling

### HTTP Status Codes

**Success (2xx):**

```
200 OK           - Request succeeded
201 Created      - Resource created successfully
202 Accepted     - Request accepted for processing
204 No Content   - Success but no content to return
```

**Client Errors (4xx):**

```
400 Bad Request          - Invalid request data
401 Unauthorized         - Authentication required/failed
403 Forbidden            - Authenticated but not authorized
404 Not Found            - Resource doesn't exist
405 Method Not Allowed   - HTTP method not supported
409 Conflict             - Resource conflict (duplicate)
422 Unprocessable Entity - Validation errors
429 Too Many Requests    - Rate limit exceeded
```

**Server Errors (5xx):**

```
500 Internal Server Error - Server-side error
502 Bad Gateway          - Invalid response from upstream
503 Service Unavailable  - Server temporarily unavailable
504 Gateway Timeout      - Upstream server timeout
```

### Error Handling Strategy

```javascript
async function handleApiCall(apiFunction) {
  try {
    const response = await apiFunction();
    return { success: true, data: response.data };
  } catch (error) {
    // Network error (no response)
    if (!error.response) {
      return {
        success: false,
        error: {
          message: "Network error. Please check your connection.",
          type: "NETWORK_ERROR",
        },
      };
    }

    // HTTP error response
    const status = error.response.status;
    const errorData = error.response.data;

    switch (status) {
      case 400:
        return {
          success: false,
          error: {
            message: errorData.message || "Invalid request",
            type: "VALIDATION_ERROR",
            details: errorData.details,
          },
        };

      case 401:
        // Redirect to login
        localStorage.removeItem("access_token");
        window.location.href = "/login";
        return {
          success: false,
          error: { message: "Authentication required", type: "AUTH_ERROR" },
        };

      case 403:
        return {
          success: false,
          error: {
            message: "You do not have permission for this action",
            type: "PERMISSION_ERROR",
          },
        };

      case 404:
        return {
          success: false,
          error: {
            message: "Resource not found",
            type: "NOT_FOUND",
          },
        };

      case 429:
        return {
          success: false,
          error: {
            message: "Too many requests. Please try again later.",
            type: "RATE_LIMIT",
          },
        };

      case 500:
      case 502:
      case 503:
        return {
          success: false,
          error: {
            message: "Server error. Please try again later.",
            type: "SERVER_ERROR",
          },
        };

      default:
        return {
          success: false,
          error: {
            message: errorData.message || "An error occurred",
            type: "UNKNOWN_ERROR",
          },
        };
    }
  }
}
```

### Retry Logic

```javascript
async function retryableRequest(apiFunction, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await apiFunction();
    } catch (error) {
      const isLastAttempt = attempt === maxRetries - 1;
      const isRetryable = error.response?.status >= 500 || !error.response;

      if (isLastAttempt || !isRetryable) {
        throw error;
      }

      // Exponential backoff: 1s, 2s, 4s
      const delay = Math.pow(2, attempt) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
```

---

## Implementation Guidelines for AI Agents

### Step-by-Step Integration Process

#### Phase 1: Discovery & Analysis

```
1. Locate API configuration files
   - Check src/services/, src/api/, src/lib/
   - Find constants/endpoints.js or similar
   - Identify config/api.js or axios setup

2. Identify base URL and environment variables
   - Check .env files
   - Look for API_URL, BASE_URL variables

3. Understand authentication method
   - Find login/auth endpoints
   - Check token storage mechanism
   - Review request interceptors

4. Map available endpoints
   - List all endpoint constants
   - Group by resource type
   - Document parameters and responses
```

#### Phase 2: Setup API Client

```
1. Create or locate API client instance
2. Configure base URL from environment
3. Set up request interceptors for auth
4. Add response interceptors for errors
5. Implement retry logic if needed
```

#### Phase 3: Implement Service Layer

```
1. Create service functions for each endpoint
2. Follow naming conventions (get*, create*, update*, delete*)
3. Handle request/response transformations
4. Add error handling
5. Document expected inputs/outputs
```

#### Phase 4: Testing

```
1. Test authentication flow
2. Verify CRUD operations
3. Test error scenarios
4. Validate pagination
5. Check file upload/download
```

### Common Integration Patterns

#### Pattern 1: Resource CRUD Service

```javascript
// services/resource.service.js
import api from "./api-client";

const ENDPOINTS = {
  LIST: "/resources",
  DETAIL: (id) => `/resources/${id}`,
  CREATE: "/resources",
  UPDATE: (id) => `/resources/${id}`,
  DELETE: (id) => `/resources/${id}`,
};

export const resourceService = {
  list: async (params) => {
    const response = await api.get(ENDPOINTS.LIST, { params });
    return response.data;
  },

  get: async (id) => {
    const response = await api.get(ENDPOINTS.DETAIL(id));
    return response.data;
  },

  create: async (data) => {
    const response = await api.post(ENDPOINTS.CREATE, data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(ENDPOINTS.UPDATE(id), data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(ENDPOINTS.DELETE(id));
    return response.data;
  },
};
```

#### Pattern 2: Authentication Service

```javascript
// services/auth.service.js
import api from "./api-client";

export const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    const { access_token, refresh_token } = response.data;

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    return response.data;
  },

  logout: async () => {
    await api.post("/auth/logout");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },

  getCurrentUser: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  refreshToken: async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await api.post("/auth/refresh", { refreshToken });
    const { access_token } = response.data;

    localStorage.setItem("access_token", access_token);
    return access_token;
  },
};
```

#### Pattern 3: React Query + Custom Hooks (Recommended)

**Why Use React Query?**

- Automatic caching and background refetching
- Loading and error states management
- Automatic request deduplication
- Optimistic updates
- Pagination and infinite scroll support
- Built-in retry logic

**Architecture: Service Layer → Custom Hook → Component**

```
Service Layer (API calls) → Custom Hooks (React Query) → Pages/Components
```

**Step 1: Create Service Layer**

```javascript
// services/posts.service.js
import api from "./api-client";

export const postsService = {
  getPosts: async (params) => {
    const response = await api.get("/posts", { params });
    return response.data;
  },

  getPost: async (id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  createPost: async (data) => {
    const response = await api.post("/posts", data);
    return response.data;
  },

  updatePost: async ({ id, data }) => {
    const response = await api.put(`/posts/${id}`, data);
    return response.data;
  },

  deletePost: async (id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  },
};
```

**Step 2: Create Custom Hooks with React Query**

**For Queries (GET requests):**

```javascript
// hooks/useGetPosts.js
import { useQuery } from "@tanstack/react-query";
import { postsService } from "../services/posts.service";

export const useGetPosts = ({ page = 1, limit = 10, filters = {} }) => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["posts", page, limit, filters], // Cache key
    queryFn: () => postsService.getPosts({ page, limit, ...filters }),
    enabled: true, // Auto-fetch on mount
    refetchInterval: false, // Or set time in ms for auto-refetch
    staleTime: 5 * 60 * 1000, // 5 minutes before data is stale
    cacheTime: 10 * 60 * 1000, // 10 minutes cache retention
    onError: (error) => {
      console.error("Failed to fetch posts:", error);
    },
    onSuccess: (data) => {
      console.log("Posts fetched successfully:", data);
    },
  });

  return {
    posts: data?.items || [],
    total: data?.total || 0,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
};
```

**For Single Item (GET by ID):**

```javascript
// hooks/useGetPost.js
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { postsService } from "../services/posts.service";

export const useGetPost = (postId) => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => postsService.getPost(postId),
    enabled: !!postId, // Only fetch if postId exists
    onError: (error) => {
      if (error?.response?.status === 404) {
        navigate("/404");
      }
    },
  });

  return {
    post: data,
    isLoadingPost: isLoading,
    isErrorPost: isError,
    errorPost: error,
  };
};
```

**For Mutations (POST, PUT, DELETE):**

```javascript
// hooks/useCreatePost.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsService } from "../services/posts.service";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => postsService.createPost(data),
    onSuccess: (newPost) => {
      // Invalidate and refetch posts list
      queryClient.invalidateQueries({ queryKey: ["posts"] });

      // Or manually update cache (optimistic update)
      queryClient.setQueryData(["post", newPost.id], newPost);
    },
    onError: (error) => {
      console.error("Failed to create post:", error);
    },
  });

  const createPost = (data, callbacks = {}) => {
    mutation.mutate(data, {
      onSuccess: (response) => {
        callbacks.onSuccess?.(response);
      },
      onError: (error) => {
        callbacks.onError?.(error);
      },
      onSettled: () => {
        callbacks.onSettled?.();
      },
    });
  };

  return {
    createPost,
    isCreating: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};
```

```javascript
// hooks/useUpdatePost.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsService } from "../services/posts.service";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, data }) => postsService.updatePost({ id, data }),
    onSuccess: (updatedPost, variables) => {
      // Invalidate specific post and list
      queryClient.invalidateQueries({ queryKey: ["post", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    updatePost: mutation.mutate,
    isUpdating: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};
```

```javascript
// hooks/useDeletePost.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsService } from "../services/posts.service";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (postId) => postsService.deletePost(postId),
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: ["post", deletedId] });

      // Refresh list
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    deletePost: mutation.mutate,
    isDeleting: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};
```

**Step 3: Use Hooks in Components/Pages**

```javascript
// pages/PostsPage.jsx
import React, { useState } from "react";
import { useGetPosts } from "../hooks/useGetPosts";
import { useDeletePost } from "../hooks/useDeletePost";

const PostsPage = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  // Query hook
  const { posts, total, isLoading, refetch } = useGetPosts({
    page,
    limit: 20,
    filters,
  });

  // Mutation hook
  const { deletePost, isDeleting } = useDeletePost();

  const handleDelete = (postId) => {
    if (window.confirm("Delete this post?")) {
      deletePost(postId, {
        onSuccess: () => {
          alert("Post deleted successfully");
        },
      });
    }
  };

  if (isLoading) return <div>Loading posts...</div>;

  return (
    <div>
      <h1>Posts ({total})</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      ))}

      {/* Pagination */}
      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
};

export default PostsPage;
```

```javascript
// pages/CreatePostPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreatePost } from "../hooks/useCreatePost";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { createPost, isCreating } = useCreatePost();

  const onSubmit = (data) => {
    createPost(data, {
      onSuccess: () => {
        alert("Post created successfully!");
        navigate("/posts");
      },
      onError: (error) => {
        alert(`Failed to create post: ${error.message}`);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" required />
      <textarea {...register("content")} placeholder="Content" required />
      <button type="submit" disabled={isCreating}>
        {isCreating ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
};

export default CreatePostPage;
```

**Advanced: Wrapper Hook for Error Handling**

```javascript
// hooks/useReactQuery.js (Custom wrapper)
import { useQuery as useQueryOriginal, useMutation as useMutationOriginal } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNotification } from "./useNotification";

const handleError = (error, t, showNotification) => {
  // Skip certain errors
  if (error?.response?.status === 500) return;

  const errorMessage = error?.response?.data?.error?.message || t("network_error");

  showNotification({
    type: "error",
    message: errorMessage,
  });
};

export const useQuery = (queryKey, queryFn, options = {}) => {
  const { t } = useTranslation();
  const { showNotification } = useNotification();

  return useQueryOriginal(queryKey, queryFn, {
    retry: 0,
    ...options,
    onError: (error) => {
      if (options.onError) {
        options.onError(error);
      } else {
        handleError(error, t, showNotification);
      }
    },
  });
};

export const useMutation = (options = {}) => {
  const { t } = useTranslation();
  const { showNotification } = useNotification();

  return useMutationOriginal({
    retry: 0,
    ...options,
    onError: (error) => {
      if (options.onError) {
        options.onError(error);
      } else {
        handleError(error, t, showNotification);
      }
    },
  });
};
```

**Benefits of This Pattern:**

✅ **Separation of Concerns**

- Services: Pure API calls
- Hooks: React Query logic + state management
- Components: UI rendering only

✅ **Reusability**

- Hooks can be used across multiple components
- Centralized data fetching logic

✅ **Automatic Optimizations**

- Built-in caching
- Request deduplication
- Background refetching

✅ **Better Developer Experience**

- Loading/error states handled automatically
- Type-safe with TypeScript
- Easy to test

✅ **Performance**

- Reduces unnecessary re-renders
- Efficient cache management
- Optimistic updates support

#### Pattern 4: File Upload Service

```javascript
// services/upload.service.js
import api from "./api-client";

export const uploadService = {
  // Get presigned URL
  getPresignedUrl: async (fileName, fileType) => {
    const response = await api.post("/upload/presigned-url", {
      fileName,
      fileType,
    });
    return response.data;
  },

  // Upload to cloud storage
  uploadFile: async (file) => {
    // Get presigned URL
    const { url, fields } = await uploadService.getPresignedUrl(file.name, file.type);

    // Upload to S3
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("file", file);

    await fetch(url, { method: "POST", body: formData });

    return fields.key; // S3 object key
  },

  // Direct upload to API
  uploadDirect: async (file, metadata = {}) => {
    const formData = new FormData();
    formData.append("file", file);
    Object.entries(metadata).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await api.post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },
};
```

---

## Best Practices

### 1. Security

```
✓ Store tokens securely (httpOnly cookies preferred)
✓ Use HTTPS for all API calls
✓ Validate and sanitize all input data
✓ Implement CSRF protection for state-changing operations
✓ Never log sensitive data (passwords, tokens, PII)
✓ Set appropriate CORS policies
✓ Implement rate limiting on client side
✓ Use environment variables for sensitive config
```

### 2. Performance

```
✓ Implement caching for frequently accessed data
✓ Use pagination for large datasets
✓ Debounce search and autocomplete requests
✓ Compress request/response payloads
✓ Use HTTP/2 or HTTP/3 when available
✓ Implement request deduplication
✓ Lazy load resources when possible
✓ Use connection pooling
```

### 3. Reliability

```
✓ Implement retry logic with exponential backoff
✓ Handle network errors gracefully
✓ Provide offline fallbacks when possible
✓ Validate responses before processing
✓ Use timeouts for all requests
✓ Implement circuit breaker pattern for failing services
✓ Log errors for debugging
✓ Monitor API health and performance
```

### 4. Code Quality

```
✓ Use TypeScript for type safety
✓ Create reusable service modules
✓ Follow consistent naming conventions
✓ Document all API functions
✓ Write unit tests for service layer
✓ Use constants for endpoints
✓ Centralize error handling
✓ Keep business logic separate from API calls
```

### 5. User Experience

```
✓ Show loading states during API calls
✓ Display user-friendly error messages
✓ Implement optimistic updates when appropriate
✓ Provide progress indicators for long operations
✓ Allow users to cancel in-flight requests
✓ Cache results to improve perceived performance
✓ Implement proper error recovery flows
```

### 6. Maintainability

```
✓ Version your API integration code
✓ Document breaking changes
✓ Use semantic versioning
✓ Maintain changelog
✓ Create migration guides for API changes
✓ Keep dependencies up to date
✓ Monitor deprecation warnings
```

---

## Quick Reference Checklist

### Before Integration

- [ ] Read API documentation
- [ ] Identify authentication method
- [ ] Locate endpoint definitions
- [ ] Check rate limits and quotas
- [ ] Understand error response format
- [ ] Review data models and schemas

### During Integration

- [ ] Set up API client with base URL
- [ ] Implement authentication
- [ ] Create service layer for endpoints
- [ ] Add request/response interceptors
- [ ] Implement error handling
- [ ] Add retry logic for failures
- [ ] Set appropriate timeouts
- [ ] Validate all responses

### After Integration

- [ ] Test all endpoints
- [ ] Handle edge cases
- [ ] Add logging and monitoring
- [ ] Document integration code
- [ ] Create error handling guides
- [ ] Perform security review
- [ ] Test error scenarios
- [ ] Validate performance

---

## Example: Real-World Integration Workflow

### Scenario: Integrating a Blog API

**Step 1: Discover the API**

```javascript
// Found in src/services/blog.service.js
const ENDPOINTS = {
  POSTS: "/api/posts",
  POST_DETAIL: (id) => `/api/posts/${id}`,
  COMMENTS: (postId) => `/api/posts/${postId}/comments`,
};
```

**Step 2: Set Up Client**

```javascript
// api-client.js
import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
```

**Step 3: Implement Services**

```javascript
// services/blog.service.js
import api from "./api-client";

export const blogService = {
  getPosts: (params) => api.get("/api/posts", { params }).then((res) => res.data),

  getPost: (id) => api.get(`/api/posts/${id}`).then((res) => res.data),

  createPost: (data) => api.post("/api/posts", data).then((res) => res.data),

  updatePost: (id, data) => api.put(`/api/posts/${id}`, data).then((res) => res.data),

  deletePost: (id) => api.delete(`/api/posts/${id}`).then((res) => res.data),
};
```

**Step 4: Use in Application**

```javascript
// In your component or controller
async function loadPosts() {
  try {
    const { items, total } = await blogService.getPosts({
      page: 1,
      limit: 10,
    });
    console.log(`Loaded ${items.length} of ${total} posts`);
    return items;
  } catch (error) {
    console.error("Failed to load posts:", error);
    throw error;
  }
}
```

---

## Adapting This Guide to Your Project

### 1. Identify Your Project's Patterns

```
□ Locate service files (src/services/, api/, lib/)
□ Find endpoint definitions
□ Check authentication method
□ Review response format
□ Understand error handling
```

### 2. Create Project-Specific Documentation

```
□ List all available endpoints
□ Document request/response examples
□ Note any custom headers required
□ Define authentication flow
□ Document error codes
```

### 3. Build Your Service Layer

```
□ Create one service file per resource
□ Implement CRUD operations
□ Add error handling
□ Include JSDoc comments
□ Export service functions
```

### 4. Test Your Integration

```
□ Test each endpoint individually
□ Verify authentication works
□ Test error scenarios
□ Validate data transformations
□ Check pagination
```

---

## Common Pitfalls to Avoid

### 1. Authentication Issues

❌ **Wrong:** Hardcoding tokens

```javascript
headers: { 'Authorization': 'Bearer abc123' }
```

✅ **Right:** Dynamic token retrieval

```javascript
headers: { 'Authorization': `Bearer ${getToken()}` }
```

### 2. Error Handling

❌ **Wrong:** Ignoring errors

```javascript
api.get("/data").then((res) => res.data);
```

✅ **Right:** Proper error handling

```javascript
api
  .get("/data")
  .then((res) => res.data)
  .catch((error) => handleError(error));
```

### 3. Pagination

❌ **Wrong:** Loading all data at once

```javascript
GET /api/users?limit=999999
```

✅ **Right:** Proper pagination

```javascript
GET /api/users?page=1&limit=20
```

### 4. File Uploads

❌ **Wrong:** Setting Content-Type manually

```javascript
headers: { 'Content-Type': 'multipart/form-data' }
```

✅ **Right:** Let browser set boundary

```javascript
// Don't set Content-Type for FormData
fetch(url, { method: "POST", body: formData });
```

---

## Glossary

- **API**: Application Programming Interface
- **REST**: Representational State Transfer
- **CRUD**: Create, Read, Update, Delete
- **JWT**: JSON Web Token
- **OAuth**: Open Authorization
- **CORS**: Cross-Origin Resource Sharing
- **Endpoint**: Specific URL path for API operations
- **Payload**: Data sent in request body
- **Query Parameters**: URL parameters (?key=value)
- **Headers**: Metadata sent with requests
- **Status Code**: HTTP response code (200, 404, etc.)
- **Pagination**: Breaking large datasets into pages
- **Idempotent**: Operation that produces same result when repeated
- **Rate Limiting**: Restricting number of requests per time period

---

## Additional Resources

### Tools for API Development

- **Postman**: API testing and documentation
- **Insomnia**: REST/GraphQL client
- **cURL**: Command-line HTTP client
- **Thunder Client**: VS Code extension for API testing
- **Swagger/OpenAPI**: API specification format

### Learning Resources

- **MDN Web Docs**: HTTP methods and headers
- **REST API Tutorial**: Best practices
- **HTTP Status Codes**: Complete reference
- **JWT.io**: JSON Web Token debugger

### Monitoring & Debugging

- **Browser DevTools**: Network tab for requests
- **React Query DevTools**: Query state inspection
- **Redux DevTools**: State management debugging
- **Sentry**: Error tracking and monitoring

---

_Last Updated: November 27, 2025_
_Document Version: 2.0.0_
_License: MIT_

---

## Document Change History

| Version | Date       | Changes                              |
| ------- | ---------- | ------------------------------------ |
| 2.0.0   | 2025-11-27 | Converted to generic, reusable guide |
| 1.0.0   | 2025-11-27 | Initial project-specific version     |
