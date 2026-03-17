import { useToast } from "@/hooks/use-toast";
import { 
  useGetProducts, 
  useGetProductById, 
  useSubmitContact,
  useHealthCheck
} from "@workspace/api-client-react";

// Wrapper for products to easily expose to components
export function useProducts(category?: string) {
  return useGetProducts(category ? { category } : undefined, {
    query: {
      staleTime: 5 * 60 * 1000, // 5 minutes cache
    }
  });
}

// Wrapper for single product
export function useProduct(id: number | null) {
  return useGetProductById(id as number, {
    query: {
      enabled: id !== null && !isNaN(id),
      staleTime: 5 * 60 * 1000,
    }
  });
}

// Wrapper for contact submission to include toast notifications
export function useContactForm() {
  const { toast } = useToast();
  
  return useSubmitContact({
    mutation: {
      onSuccess: (data) => {
        toast({
          title: "Message Sent!",
          description: data.message || "We will get back to you shortly.",
          variant: "default",
        });
      },
      onError: (error: any) => {
        toast({
          title: "Error",
          description: error?.response?.data?.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    }
  });
}

export function useApiHealth() {
  return useHealthCheck({
    query: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  });
}
