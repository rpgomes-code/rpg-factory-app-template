import { Client } from '@elastic/elasticsearch';

const isProduction = process.env.NODE_ENV === 'production';

// Configure Elasticsearch client
const elasticClient = new Client({
    node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
    auth: isProduction
        ? {
            username: process.env.ELASTICSEARCH_USERNAME || '',
            password: process.env.ELASTICSEARCH_PASSWORD || '',
        }
        : undefined,
    tls: isProduction
        ? {
            rejectUnauthorized: false,
        }
        : undefined,
});

// Create a generic search function
export async function search<T>(
    index: string,
    query: string,
    fields: string[],
    size: number = 10
): Promise<T[]> {
    try {
        const result = await elasticClient.search({
            index,
            size,
            body: {
                query: {
                    multi_match: {
                        query,
                        fields,
                        fuzziness: 'AUTO',
                    },
                },
            },
        });

        return (result.hits.hits.map((hit) => hit._source) as T[]) || [];
    } catch (error) {
        console.error('Elasticsearch Error:', error);
        return [];
    }
}

// Index a document
export async function indexDocument<T extends { id: string }>(
    index: string,
    document: T
): Promise<void> {
    try {
        await elasticClient.index({
            index,
            id: document.id,
            body: document,
            refresh: true,
        });
    } catch (error) {
        console.error('Elasticsearch Index Error:', error);
    }
}

// Delete a document
export async function deleteDocument(
    index: string,
    id: string
): Promise<void> {
    try {
        await elasticClient.delete({
            index,
            id,
            refresh: true,
        });
    } catch (error) {
        console.error('Elasticsearch Delete Error:', error);
    }
}

// Update a document
export async function updateDocument<T>(
    index: string,
    id: string,
    document: Partial<T>
): Promise<void> {
    try {
        await elasticClient.update({
            index,
            id,
            body: {
                doc: document,
            },
            refresh: true,
        });
    } catch (error) {
        console.error('Elasticsearch Update Error:', error);
    }
}

export { elasticClient };