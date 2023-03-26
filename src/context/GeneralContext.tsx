import { createContext, Context } from 'react';
import { GeneralContext } from '../interfaces/GeneralContext.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GENERAL_CONTEXT: Context<GeneralContext> = createContext(null as any);
export default GENERAL_CONTEXT;
