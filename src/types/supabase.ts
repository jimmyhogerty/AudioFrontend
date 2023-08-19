export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      savedSites: {
        Row: {
          created_at: string
          id: number
          savedSites: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          savedSites: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          savedSites?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "savedSites_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Searches: {
        Row: {
          created_at: string | null
          id: number
          keywords: string[]
          sites: string[]
          timeFilter: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          keywords: string[]
          sites: string[]
          timeFilter?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          keywords?: string[]
          sites?: string[]
          timeFilter?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Searches_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
